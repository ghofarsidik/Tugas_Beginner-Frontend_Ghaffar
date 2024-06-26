/* eslint-disable no-unused-vars */
import Logo from "../../../components/images/logo/whitelogo.png";
import Photo from "../../../components/images/background/orang2.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../components/base/Input";
import Button from "../../../components/base/Button";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../feature/users/usersSlice";
import { unwrapResult } from "@reduxjs/toolkit";

function Worker() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading } = useSelector((state) => state.users);

    const [form, setForm] = useState({
        email: '',
        password: '',
        name: '',
        phone: ''
    });

    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => {
        try {
            e.preventDefault();
            if (form.password !== confirmPassword) {
                alert("Password dan konfirmasi password tidak sama");
                return;
            }
            const response = await dispatch(register(form));
            const user = unwrapResult(response);
            navigate('/login');
        } catch (error) {
            alert(error);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    return (
        <div className="w-screen h-fit flex mx-auto">
            <div className="hidden w-1/2 relative h-[822px] lg:flex flex-col border bg-slate-400">
                <img className="relative h-full w-full object-cover z-1" src={Photo} alt="Background" />
                <div className="absolute h-full w-full bg-ungu-pj bg-opacity-80 z-2"></div>
                <img className="absolute z-3 pl-[60px] pt-[40px]" src={Logo} alt="Logo" />
                <h1 className="absolute leading-[80px] flex font-Osans text-[54px] font-bold z-3 top-1/2 transform -translate-y-1/2 text-white px-[70px]">
                    Temukan developer berbakat & terbaik di berbagai bidang keahlian
                </h1>
            </div>

            <div className="lg:w-1/2 w-80% flex flex-col font-Osans p-[60px]">
                <p className="text-[32px] font-semibold mt-[30px]">Halo, Pewpeople</p>
                <p className="text-[18px] text-[#46505C] mt-[16px]">Daftar dan segera temukan pekerjaan indaman</p>
                <Input label="Nama" name="name" onChange={handleChange} type="text" value={form.name} placeholder="Masukkan nama" />
                <Input label="Email" name="email" onChange={handleChange} type="email" value={form.email} placeholder="Masukkan email" />
                <Input label="No. handphone" name="phone" onChange={handleChange} type="text" value={form.phone} placeholder="Masukkan no. handphone" />
                <Input label="Kata sandi" name="password" onChange={handleChange} type="password" value={form.password} placeholder="Masukkan kata sandi" />
                <Input label="Konfirmasi kata sandi" name="confirmPassword" onChange={handleConfirmPasswordChange} type="password" value={confirmPassword} placeholder="Masukkan konfirmasi kata sandi" />

                <Button label="Daftar" className="mt-10" onClick={handleRegister} />
                <p className="text-[16px] mt-[28px] text-center mb-8">
                    Sudah punya akun? <Link className="text-yellow-400" to="/login">Masuk disini</Link>
                </p>
            </div>
        </div>
    );
}

export default Worker;
