// import { useEffect, useState } from "react";

// //const tracks = null
// // const tracks = [
// //     {id: 1, title: 'Musicfun soundtrack', url: 'https://cdn7.sefon.pro/prev/J4NIQsDUNGlr7QszcP1FWg/1776764455/24/%D0%9C%D0%B0%D0%BA%D1%81%20%D0%9A%D0%BE%D1%80%D0%B6%20-%20%D0%9C%D0%B0%D0%BB%D0%B8%D0%BD%D0%BE%D0%B2%D1%8B%D0%B9%20%D0%97%D0%B0%D0%BA%D0%B0%D1%82%20%28192kbps%29.mp3'},
// //     {id: 2, title: 'Musicfun soundtrack instrumental', url: 'https://cdn6.sefon.pro/prev/34dNxWlYYgdHTQ9JctbPNg/1776764455/24/%D0%9C%D0%B0%D0%BA%D1%81%20%D0%9A%D0%BE%D1%80%D0%B6%20-%20%D0%93%D0%BE%D1%80%D1%8B%20%D0%9F%D0%BE%20%D0%9A%D0%BE%D0%BB%D0%B5%D0%BD%D0%BE%20%28192kbps%29.mp3'}
// // ]

// // const selectedtrackId = tracks.map((track)=>{
// //   return{
// //     ...track,
// //     isSelected:
// //   }
// // })

// export function App() {
//   const [selectedTrackId, setSelectedTrackId] = useState<number | null>(null);
//   const [selectedTrack, setSelectedTrack] = useState(null);

//   const [tracks, setTracks] = useState(null);

//   // const effect = () => {
//   //   console.log("effect")
//   // }

//   useEffect(() => {
//     console.log("effect");
//     fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
//       headers: {
//         "api-key": "c44f1ebc-1bcb-41cf-b62e-de773858faf5",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => setTracks(json.data));
//   }, []);

//   useEffect(() => {
//     if (!selectedTrackId) return;

//     fetch(
//       "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
//         selectedTrackId,
//       {
//         headers: {
//           "api-key": "c44f1ebc-1bcb-41cf-b62e-de773858faf5",
//         },
//       },
//     )
//       .then((res) => res.json())
//       .then((json) => setSelectedTrack(json.data));
//   }, [selectedTrackId]);

//   if (tracks === null) {
//     return (
//       <div>
//         <h1>Musicfun Player</h1>
//         <span>Loading...</span>
//       </div>
//     );
//   }

//   if (tracks.length === 0) {
//     return (
//       <div>
//         <h1>Musicfun Player</h1>
//         <span>No tracks</span>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>Musicfun Player</h1>

//       <button
//         onClick={() => {
//           setSelectedTrackId(null);
//           setSelectedTrack(null);
//         }}
//       >
//         reset selected
//       </button>

//       <div
//         style={{
//           display: "flex",
//           gap: "10px",
//         }}
//       >
//         <ul>
//           {tracks.map((track) => {
//             return (
//               <li
//                 key={track.id}
//                 style={{
//                   border:
//                     track.id === selectedTrackId ? "1px solid orange" : "none",
//                 }}
//               >
//                 <div
//                   onClick={() => {
//                     setSelectedTrackId(track.id);
//                   }}
//                 >
//                   {track.attributes.title}
//                 </div>

//                 <audio
//                   src={track.attributes.attachments[0].url}
//                   controls
//                 ></audio>
//               </li>
//             );
//           })}
//         </ul>

//         <div>
//           <h2>Details</h2>

//           {!selectedTrack && !selectedTrackId && "track is not selected"}

//           {!selectedTrack && selectedTrackId && "Loading..."}

//           {selectedTrack &&
//             selectedTrackId &&
//             selectedTrack.id !== selectedTrackId &&
//             "Loading..."}

//           {selectedTrack && (
//             <div>
//               <h3>{selectedTrack.attributes?.title}</h3>

//               <h4>Lyrics</h4>

//               <p>{selectedTrack.attributes.lyrics ?? "no lyrics"}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
