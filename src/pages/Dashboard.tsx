
import Button from '../components/ui/Button'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Card } from '../components/ui/Card'
import { ContentModal } from '../components/ui/ContentModal'
import { useState } from 'react'
import { Sidebar } from '../components/ui/Sidebar'
import { useContent } from '../hooks/useContent'
import axios from 'axios'
import { BACKEND_URL } from '../config'

export function Dashboard() {
    const [modalOpen, setModalOpen] = useState(false)
    const contents = useContent()
    return (
        <div className="flex">
            <Sidebar />
            <div className="p-4 ml-72 min-h-screen bg-gray-100 border-2 w-full">
                <ContentModal open={modalOpen} onClose={() => setModalOpen(false)} />

                <div className="flex justify-end gap-4 mb-4">
                    <Button
                        onClick={() => setModalOpen(true)}
                        variant="primary"
                        text="Add Content"
                        size="small"
                        startIcon={<PlusIcon size="medium" />}
                    />
                    <Button
                        variant="secondary"
                        size="small"
                        text="Share Brain"
                        startIcon={<ShareIcon />}
                        onClick={async () => {
                            const response = await axios.post(BACKEND_URL + '/brain/share ', {
                                share: true
                            }, {
                                headers: {
                                    "Authorization": localStorage.getItem("token")
                                }
                            });
                            const url = 'http://localhost:5173/share' + response.data.hash
                        }}
                    />
                </div>

                {/* Cards in a row */}
                <div className="flex gap-4 flex-wrap">

                    {contents.map(({ type, link, title, id }) => (
                        <Card
                            key={id}
                            type={type}
                            link={link}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
