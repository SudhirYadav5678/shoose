import { X } from 'lucide-react';
import React, { useRef } from 'react'

function ModalBox({
    onClose,
    children,
    className = 'w-[600px] h-[500px]'
}) {
    const modal = useRef(null)
    const closeModal = (e) => {
        if (modal.current === e.target) {
            onClose();
        }
    }
    return (
        <>
            <div ref={modal} onClick={closeModal} className='fixed inset-0 z-10 bg-white flex justify-center items-center '>
                <div className='mt-10 flex flex-col gap-5'>
                    <X onClick={onClose} className='text-2xl text-black place-self-end cursor-pointer' />
                    <div className={`border-2 rounded-3xl ${className}`}>{children}</div>
                </div>
            </div>
        </>
    )
}

export default ModalBox