import { Box } from '@material-ui/core'
import React, { useEffect, useRef, useState } from 'react'
import BottomBar from '../BottomBar/BottomBar'
import Chat from '../Chat/Chat'
import Room from '../Room/Room'
import useStyles from './styles'
import { Helmet } from 'react-helmet-async'
import Peer from 'simple-peer'
import socket from 'socket'
import { useParams, useHistory } from 'react-router'
import Video from '../Video/Video'

const Main = () => {
	const classes = useStyles()
	const history = useHistory()
	// Open chat
	const [openChat, setOpenChat] = useState(false)
	const handleOpenChat = () => {
		setOpenChat(!openChat)
	}

	// Socket
	const currentUser = sessionStorage.getItem('user')
	const [peers, setPeers] = useState([])
	const [userVideoAudio, setUserVideoAudio] = useState({
		localUser: { video: true, audio: true },
	})
	const [videoDevices, setVideoDevices] = useState([])
	const [screenShare, setScreenShare] = useState(false)
	const [showVideoDevices, setShowVideoDevices] = useState(false)
	const peersRef = useRef([])
	const userVideoRef = useRef({})
	const screenTrackRef = useRef()
	const userStream = useRef()
	const { roomId } = useParams()

	useEffect(() => {
		// Get Video Devices
		navigator.mediaDevices.enumerateDevices().then((devices) => {
			const filtered = devices.filter((device) => device.kind === 'videoinput')
			setVideoDevices(filtered)
		})

		// Set Back Button Event
		window.addEventListener('popstate', goToBack)

		// Connect Camera & Mic
		navigator.mediaDevices
			.getUserMedia({ video: { facingMode: 'user' }, audio: true })
			.then((stream) => {
				userVideoRef.current.srcObject = stream
				userStream.current = stream

				socket.emit('BE-join-room', { roomId, userName: currentUser })
				socket.on('FE-user-join', (users) => {
					// all users
					const peers = []
					users.forEach(({ userId, info }) => {
						let { userName, video, audio } = info

						if (userName !== currentUser) {
							const peer = createPeer(userId, socket.id, stream)

							peer.userName = userName
							peer.peerID = userId

							peersRef.current.push({
								peerID: userId,
								peer,
								userName,
							})
							peers.push(peer)

							setUserVideoAudio((preList) => {
								return {
									...preList,
									[peer.userName]: { video, audio },
								}
							})
						}
					})

					setPeers(peers)
				})

				socket.on('FE-receive-call', ({ signal, from, info }) => {
					let { userName, video, audio } = info
					const peerIdx = findPeer(from)

					if (!peerIdx) {
						const peer = addPeer(signal, from, stream)

						peer.userName = userName

						peersRef.current.push({
							peerID: from,
							peer,
							userName: userName,
						})
						setPeers((users) => {
							return [...users, peer]
						})
						setUserVideoAudio((preList) => {
							return {
								...preList,
								[peer.userName]: { video, audio },
							}
						})
					}
				})

				socket.on('FE-call-accepted', ({ signal, answerId }) => {
					const peerIdx = findPeer(answerId)
					peerIdx.peer.signal(signal)
				})

				socket.on('FE-user-leave', ({ userId, userName }) => {
					const peerIdx = findPeer(userId)
					peerIdx.peer.destroy()
					setPeers((users) => {
						users = users.filter((user) => user.peerID !== peerIdx.peer.peerID)
						return [...users]
					})
					console.log(peers)
				})
			})

		socket.on('FE-toggle-camera', ({ userId, switchTarget }) => {
			const peerIdx = findPeer(userId)

			setUserVideoAudio((preList) => {
				let video = preList[peerIdx.userName].video
				let audio = preList[peerIdx.userName].audio

				if (switchTarget === 'video') video = !video
				else audio = !audio

				return {
					...preList,
					[peerIdx.userName]: { video, audio },
				}
			})
		})

		return () => {
			socket.disconnect()
		}

		// eslint-disable-next-line
	}, [])

	const createPeer = (userId, caller, stream) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream,
		})

		peer.on('signal', (signal) => {
			socket.emit('BE-call-user', {
				userToCall: userId,
				from: caller,
				signal,
			})
		})
		peer.on('disconnect', () => {
			peer.destroy()
		})

		return peer
	}

	const addPeer = (incomingSignal, callerId, stream) => {
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream,
		})

		peer.on('signal', (signal) => {
			socket.emit('BE-accept-call', { signal, to: callerId })
		})

		peer.on('disconnect', () => {
			peer.destroy()
		})

		peer.signal(incomingSignal)

		return peer
	}

	const findPeer = (id) => {
		return peersRef.current.find((p) => p.peerID === id)
	}

	const createUserVideo = (peer, index, arr) => {
		console.log(peer)
		// return (
		// 	<VideoBox
		// 		className={`width-peer${peers.length > 8 ? '' : peers.length}`}
		// 		onClick={expandScreen}
		// 		key={index}
		// 	>
		// 		{writeUserName(peer.userName)}
		// 		<FaIcon className="fas fa-expand" />
		// 		<VideoCard key={index} peer={peer} number={arr.length} />
		// 	</VideoBox>
		// )

		return (
			<Box className={classes.room} onClick={expandScreen} key={index}>
				{writeUserName(peer.userName)}
				<Box className={classes.videoContainer}>
					<Video key={index} peer={peer} number={arr.length} />
				</Box>
			</Box>
		)
	}

	const writeUserName = (userName, index) => {
		if (userVideoAudio.hasOwnProperty(userName)) {
			if (!userVideoAudio[userName].video) {
				return (
					<div className={classes.username} key={userName}>
						{userName}
					</div>
				)
			}
		}
	}

	// BackButton
	const goToBack = (e) => {
		e.preventDefault()

		socket.emit('BE-leave-room', { roomId, leaver: currentUser })
		sessionStorage.removeItem('user')
		history.push('/dashboard/timetable')
	}

	const toggleCameraAudio = (e) => {
		console.log(e.target)
		const target = e.target.getAttribute('data-switch')

		setUserVideoAudio((preList) => {
			let videoSwitch = preList['localUser'].video
			let audioSwitch = preList['localUser'].audio

			if (target === 'video') {
				const userVideoTrack =
					userVideoRef.current.srcObject.getVideoTracks()[0]
				videoSwitch = !videoSwitch
				userVideoTrack.enabled = videoSwitch
			} else {
				const userAudioTrack =
					userVideoRef.current.srcObject.getAudioTracks()[0]
				audioSwitch = !audioSwitch

				if (userAudioTrack) {
					userAudioTrack.enabled = audioSwitch
				} else {
					userStream.current.getAudioTracks()[0].enabled = audioSwitch
				}
			}

			return {
				...preList,
				localUser: { video: videoSwitch, audio: audioSwitch },
			}
		})

		socket.emit('BE-toggle-camera-audio', { roomId, switchTarget: target })
	}

	const clickScreenSharing = () => {
		if (!screenShare) {
			navigator.mediaDevices
				.getDisplayMedia({ cursor: true })
				.then((stream) => {
					const screenTrack = stream.getTracks()[0]

					peersRef.current.forEach(({ peer }) => {
						// replaceTrack (oldTrack, newTrack, oldStream);
						peer.replaceTrack(
							peer.streams[0]
								.getTracks()
								.find((track) => track.kind === 'video'),
							screenTrack,
							userStream.current
						)
					})

					// Listen click end
					screenTrack.onended = () => {
						peersRef.current.forEach(({ peer }) => {
							peer.replaceTrack(
								screenTrack,
								peer.streams[0]
									.getTracks()
									.find((track) => track.kind === 'video'),
								userStream.current
							)
						})
						userVideoRef.current.srcObject = userStream.current
						setScreenShare(false)
					}

					userVideoRef.current.srcObject = stream
					screenTrackRef.current = screenTrack
					setScreenShare(true)
				})
		} else {
			screenTrackRef.current.onended()
		}
	}

	const expandScreen = (e) => {
		const elem = e.target

		if (elem.requestFullscreen) {
			elem.requestFullscreen()
		} else if (elem.mozRequestFullScreen) {
			/* Firefox */
			elem.mozRequestFullScreen()
		} else if (elem.webkitRequestFullscreen) {
			/* Chrome, Safari & Opera */
			elem.webkitRequestFullscreen()
		} else if (elem.msRequestFullscreen) {
			/* IE/Edge */
			elem.msRequestFullscreen()
		}
	}

	const clickBackground = () => {
		if (!showVideoDevices) return

		setShowVideoDevices(false)
	}

	return (
		<>
			<Helmet>
				<title>Lớp học trực tuyến - Hệ thống trường quốc tế</title>
				<meta name="description" content="Helmet application" />
			</Helmet>
			<Box className={classes.main}>
				<Box className={classes.left} onClick={clickBackground}>
					{/* <Room /> */}
					<Box className={classes.roomContainer}>
						<Box className={classes.room}>
							<Box className={classes.videoContainer}>
								<video
									onClick={expandScreen}
									ref={userVideoRef}
									muted
									autoPlay
									playInline
									className={classes.video}
								></video>
								{userVideoAudio['localUser'].video ? null : (
									<div className={classes.username}>{currentUser}</div>
								)}
							</Box>
						</Box>
						{peers &&
							peers.map((peer, index, arr) =>
								createUserVideo(peer, index, arr)
							)}
					</Box>

					<BottomBar
						clickScreenSharing={clickScreenSharing}
						goToBack={goToBack}
						toggleCameraAudio={toggleCameraAudio}
						userVideoAudio={userVideoAudio['localUser']}
						screenShare={screenShare}
						videoDevices={videoDevices}
						showVideoDevices={showVideoDevices}
						setShowVideoDevices={setShowVideoDevices}
						handleOpenChat={handleOpenChat}
					/>
				</Box>
				<Chat
					openChat={openChat}
					handleOpenChat={handleOpenChat}
					roomId={roomId}
				/>
			</Box>
		</>
	)
}

export default Main
