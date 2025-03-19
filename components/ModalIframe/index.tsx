'use client';
import { Fragment, useRef, FC } from 'react';
import { Transition, Dialog, TransitionChild, DialogPanel } from '@headlessui/react';
import Image from 'next/image';

export type ModalPropTypes = {
  onClose: (...args: any) => void;
  show?: boolean;
  isGreetingCard?: boolean;
};

interface PropTypes extends ModalPropTypes {
  id: string;
  show: boolean;
  onClose: (show?: boolean) => void;
  children: any;
}

const Modal: FC<PropTypes> = ({ id, show = false, onClose, children }) => {
  const focusRef = useRef(null);
  return (
    <Transition appear show={show} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-30'
        onClose={onClose}
        initialFocus={focusRef}
        aria-label={id}
        aria-labelledby={id}
        aria-describedby={id}
      >
        <TransitionChild
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 z-49 bg-gray-900/70 backdrop-blur-md' />
        </TransitionChild>

        <div className='fixed inset-0 z-50 flex items-center justify-center rounded-t-md text-center max-md:bottom-0 md:inset-0'>
          <TransitionChild
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 max-md:translate-y-full'
            enterTo='opacity-100 max-md:-translate-y-0'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 max-md:-translate-y-0'
            leaveTo='opacity-0 max-md:translate-y-full'
          >
            <DialogPanel
              className='relative mx-10 block h-[90%] w-[90%] transform items-center rounded-md transition-all'
              onClick={() => {
                onClose();
              }}
            >
              {children}

              <button
                type='button'
                onClick={() => onClose()}
                className='absolute -right-4 -top-4 z-51 h-10 w-10 rounded-full bg-white text-xl'
              >
                <Image src='/images/vectors/close.svg' fill alt='Close Modal' />
              </button>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Modal;
