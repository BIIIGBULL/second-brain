import { ShareIcon } from "../../icons/ShareIcon";
interface Cardprops {
    title: string;
    link: string;
    type: "twitter" | "youtube"
}
export function Card(props: Cardprops) {

    const getYouTubeEmbedUrl = (url: string) => {
        // Handle different YouTube URL formats
        if (url.includes('youtube.com/watch?v=')) {
            const videoId = url.split('v=')[1]?.split('&')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtu.be/')) {
            const videoId = url.split('youtu.be/')[1]?.split('?')[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes('youtube.com/embed/')) {
            return url; // Already in embed format
        }
        return url; // Return original if format not recognized
    };


    return <div>
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-h-48 min-w-72">
            <div className=" flex justify-between">
                <div className="flex items-center text-md">
                    <div className="pr-2 text-gray-500" >
                        <ShareIcon />
                    </div>
                    <div className="pr-2 text-gray-500">
                        {props.title}
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="pr-2 text-gray-500">
                        <a href={props.link} target="_blank">
                            <ShareIcon />
                        </a>
                    </div>
                    <div >
                        <ShareIcon />
                    </div>
                </div>
            </div>
            <div className="pt-4">

                {props.type === "youtube" && <iframe className="w-full" src={getYouTubeEmbedUrl(props.link)} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                }
                {props.type === "twitter" && <blockquote className="twitter-tweet"> <a href={props.link.replace("x.com","twitter.com")}></a></blockquote>
                }
            </div>
        </div>
    </div>
}   

// import { ShareIcon } from "../../icons/ShareIcon";
// import { useEffect } from "react";

// interface CardProps {
//     title: string;
//     link: string;
//     type: "twitter" | "youtube";
// }

// export function Card(props: CardProps) {
//     useEffect(() => {
//         if (props.type === "twitter") {
//             const script = document.createElement("script");
//             script.src = "https://platform.twitter.com/widgets.js";
//             script.async = true;
//             document.body.appendChild(script);
//         }
//     }, [props.type]);

//     const renderContent = () => {
//         if (props.type === "youtube") {
//             const videoIdMatch = props.link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
//             const videoId = videoIdMatch?.[1];
//             if (!videoId) return <div className="text-red-500">Invalid YouTube link</div>;

//             return (
//                 <div className="w-full">
//                     <iframe
//                         className="w-full"
//                         src={`https://www.youtube.com/embed/${videoId}`}
//                         title="YouTube video player"
//                         frameBorder="0"
//                         //allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//                         referrerPolicy="strict-origin-when-cross-origin"
                        
//                     />
//                 </div>

//             );
//         }

//         if (props.type === "twitter") {
//             return (
//                 <blockquote className="twitter-tweet">
//                     <a href={props.link.replace("x.com", "twitter.com")}></a>
//                 </blockquote>
//             );
//         }

//         return <div className="text-gray-500">Unsupported content type</div>;
//     };

//     return (
//         <div className="p-4 bg-white rounded-md border-gray-200 max-w-72 border min-w-72">
//             <div className="flex justify-between">
//                 <div className="flex items-center text-md">
//                     <div className="pr-2 text-gray-500">
//                         <ShareIcon />
//                     </div>
//                     <div className="pr-2 text-gray-500">
//                         {props.title}
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <div className="pr-2 text-gray-500">
//                         <a href={props.link} target="_blank" rel="noopener noreferrer">
//                             <ShareIcon />
//                         </a>
//                     </div>
//                 </div>
//             </div>
//             <div className="pt-4">
//                 {renderContent()}
//             </div>
//         </div>
//     );
// }
// import { ShareIcon } from "../../icons/ShareIcon";
// import { useEffect } from "react";

// interface CardProps {
//     title: string;
//     link: string;
//     type: "twitter" | "youtube";
// }


// export function Card(props: CardProps) {
//     useEffect(() => {
//         if (props.type === "twitter") {
//             const script = document.createElement("script");
//             script.src = "https://platform.twitter.com/widgets.js";
//             script.async = true;
//             document.body.appendChild(script);
//         }
//     }, [props.type]);

//     const renderContent = () => {
//         if (props.type === "youtube") {
//             const videoIdMatch = props.link.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/);
//             const videoId = videoIdMatch?.[1];
//             if (!videoId) return <div className="text-red-500">Invalid YouTube link</div>;

//             return (
//                 <div className="w-full aspect-video">
//                     <iframe
//                         className="w-full"
//                         src={`https://www.youtube.com/embed/${videoId}`}
                        
//                         title="YouTube video player"
//                         frameBorder="0"
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         referrerPolicy="strict-origin-when-cross-origin"
//                     />
//                 </div>
//             );
//         }

//         if (props.type === "twitter") {
//             return (
//                 <div className="w-full">
//                     <blockquote className="twitter-tweet">
//                         <a href={props.link.replace("x.com", "twitter.com")}></a>
//                     </blockquote>
//                 </div>
//             );
//         }

//         return <div className="text-gray-500">Unsupported content type</div>;
//     };

//     return (
//         <div className="p-4 bg-white rounded-md border border-gray-200 max-w-sm flex flex-col">
//             <div className="flex justify-between items-start mb-4">
//                 <div className="flex items-center text-md">
//                     <div className="pr-2 text-gray-500">
//                         <ShareIcon />
//                     </div>
//                     <div className="pr-2 text-gray-500">
//                         {props.title}
//                     </div>
//                 </div>
//                 <div className="flex items-center">
//                     <a href={props.link} target="_blank" rel="noopener noreferrer" className="pr-2 text-gray-500">
//                         <ShareIcon />
//                     </a>
//                 </div>
//             </div>
//             <div>
//                 {renderContent()}
//             </div>
//         </div>
//     );
// }

