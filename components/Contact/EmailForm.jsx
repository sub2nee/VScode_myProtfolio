import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import style from './EmailForm.module.scss';

const EmailForm = () => {
    const form = useRef();

    // send mail
    const onSubmitForm = event => {
        event.preventDefault();

        try {
            emailjs.sendForm(
                process.env.NEXT_PUBLIC_NEXT_PUBLIC_MAIL_SERVER_KEY,
                process.env.NEXT_PUBLIC_MAIL_TEMPLATE_KEY,
                form.current,
                process.env.NEXT_PUBLIC_MAIL_PRIVATE_KEY
            );
            toast.success('연락 감사합니다 ! 3일 이내에 답장 드릴게요!', {
                position: toast.POSITION.TOP_CENTER,
                hideProgressBar: true,
            });
        } catch (error) {
            toast.error('메일 전송에 실패하였습니다 💦'),
                {
                    position: toast.POSITION.TOP_CENTER,
                    hideProgressBar: true,
                };
        }
    };
    return (
        <>
            <form ref={form} autoComplete="off" onSubmit={onSubmitForm}>
                <h2 className={style.emailform_title}>Send Email 📨</h2>
                <p className={style.emailform_subtitle}>
                    <em>
                        메일을 보내주시면, 평일 기준 3일 이내에 답장 드릴게요!
                    </em>
                </p>
                <div className={style.emailform_wrap}>
                    <div className={`${style.emailform_item}`}>
                        <div className={style.form_wrap}>
                            <label>Name</label>
                            <input type="text" name="name" required />
                        </div>
                        <div className={style.form_wrap}>
                            <label>Email</label>
                            <input type="email" name="email" required />
                        </div>
                        <div className={style.form_wrap}>
                            <label>Subject</label>
                            <input type="text" name="subject" required />
                        </div>
                    </div>
                    <div className={`${style.emailform_item}`}>
                        <div
                            className={`${style.form_wrap} ${style.form_wrap_msg}`}
                        >
                            <label>Message</label>
                            <textarea name="message" required />
                        </div>
                        <input type="submit" value="submit" />
                    </div>
                </div>
            </form>
            <ToastContainer />
        </>
    );
};

export default EmailForm;
