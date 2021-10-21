import React from 'react'

export default function Keys() {

    let screen = window.innerWidth;

    return (
        <div className="container mt-5">

            <div className="row">
                <div className="col">
                    <h3 className={screen <= 768 && 'text-center'}>
                        Key Features
                    </h3>
                    <ul>
                        <li className="mt-3">
                            Splices multiple clips into one video!
                        </li>
                        <li className="mt-2">
                            Allows users to add custom text to the graphics in the footer of the video!
                        </li>
                        <li className="mt-2">
                            Allows users to add background music from their device library, or mute all audio!
                        </li>
                        <li className="mt-2">
                            Uploads the private video to Vimeo (video hosting website similar to youtube) and
                            sends user the video link to easily share via text, email, or social media!
                            <ul>
                                <li className="mt-2">
                                    Doesn’t take up your device’s storage!
                                </li>
                                <li className="mt-2">
                                    No Vimeo subscription require!
                                </li>
                            </ul>
                        </li>
                        <li className="mt-2">
                            Additional features allow users to have fully customized video footer graphics. (Great for businesses or sports teams wanting to share custom content)!
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}