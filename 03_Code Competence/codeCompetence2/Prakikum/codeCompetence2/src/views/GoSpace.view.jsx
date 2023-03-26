import React, { useState } from "react";
import ContactUs from "../component/molecules/ContactUs/ContactUs.molecules";
import Footer from "../component/molecules/Footer/Footer.molecules";
import Hero from "../component/molecules/Hero/Hero.molecules";
import Navbar from "../component/organism/Navbar.organism";
import { useFormik } from "formik";
import * as Yup from "yup";
import AboutUs from "../component/molecules/AboutUs/AboutUs.molecule";

const GoSpace = () => {
	// const [contacts, setContacts] = useState([]);

	const regexname = /^[^\s][\w\s]*[^\s\W]$/;
	const regexemail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

	const schema = Yup.object().shape({
		fname: Yup.string()
			.required()
			.matches(regexname, "Nama tidak boleh mengandung simbol"),
		lname: Yup.string().required(),
		email: Yup.string().required().matches(regexemail, "Email harus benar!"),
		help: Yup.string().required(),
	});

	const formik = useFormik({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			help: "",
		},

		validationSchema: schema,
		onSubmit: (values) => {
			console.log("Cek Values", values);
			alert(
				`Hai ${values.fname}! Data Anda Telah Terkirim!
                    Nama : ${values.fname} ${values.lname}
                    Email : ${values.email} 
                    Bantuan : ${values.help}
                    Tunggu Email Dari Kami Selanjutnya Ya!`
			);
		},
	});

	console.log("error", formik.errors);

	return (
		<div>
			<Navbar />
			<Hero />
			<ContactUs formik={formik} />
			<AboutUs />
			<Footer />
		</div>
	);
};

export default GoSpace;
