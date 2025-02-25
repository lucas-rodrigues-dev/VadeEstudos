"use client";
import Image from "next/image";
import Swal from 'sweetalert2';
import "animate.css";

export default function Home () {
		const currentYear = new Date().getFullYear();

		// Sweet Alert
		const showAlert = () => {
			Swal.fire({
				title: "👋 Olá Estudante",
				showClass: {
					popup: `
						animate__animated
						animate__fadeInUp
						animate__faster
					`
				},
				hideClass: {
					popup: `
						animate__animated
						animate__fadeOutDown
						animate__faster
					`
				},
				html: `Obrigado pelo seu interesse em nossos produtos, mas ainda estamos desenvolvendo nossa loja, enquanto isso...<br><br>
					   <a href="https://pay.kiwify.com.br/lt5xaHM" target="_blank" class="swal2-confirm swal2-styled" rel="noreferrer noopener">Confira o nosso Studies Planner 2025</a>`,
				icon: "info",
				showConfirmButton: false,
				showCloseButton: true
			});
		};

	return (
		<div className="min-h-screen bg-gradient-to-r from-[#fff0ec] to-[#e6bab6] flex flex-col items-center text-center font-sans">
		{/* Imagem de Cabeçalho */}
		<div className="my-8">
			<Image
			src="/VadeEstudosMonitorias.png" 
			alt="Vade Estudos"
			width={200}
			height={200}
			className="rounded-full"
			/>
		</div>

		{/* Configurações do Instagram */}
		<div className="text-center leading-snug mb-4">
			<div className="text-[17px] mb-4">
			<a
				onClick = {() => window.open('https://www.instagram.com/vade.estudos/', '_blank', 'noreferrer noopener')}
				className="text-black no-underline hover:underline"
			>
				@vade.estudos
			</a>
			</div>
			<p className="text-[16px] text-black font-bold">
			⚖️ Transformando sua jornada no Direito
			</p>

			<p className="text-[16px] text-black font-bold">
			📚 Resumos em PDF | Monitorias | ABNT
			</p>

			<p className="text-[16px] text-black font-bold">
			🎯 Otimize seus estudos e organize sua rotina!
			</p>
		</div>

		{/* Links de Botões */}
		<div className="w-full flex flex-col items-center">
			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"
			onClick={() => window.open('https://wa.me/5561984392496?text=Ol%C3%A1%2C%20vim%20pelo%20seu%20linktree%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20seus%20servi%C3%A7os', '_blank', 'noreferrer noopener')}
			
			>
				<button>
					👋🏻 Entre em Contato Conosco
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"
			onClick = {showAlert}>
				<button
					/* onClick={() => window.open('https://vade-estudos-store.vercel.app/', '_blank', 'noreferrer noopener')} */
				>
					🛒 Acesse Nossa Loja e Garanta o seu Material de Estudos
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]">
				<button
					onClick={() => window.open('https://pay.kiwify.com.br/lt5xaHM','_blank', 'noreferrer noopener')}
				>
					📚 Compre o seu Studies Planner 2025
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"  >
				<button
					onClick={() => window.open('https://www.linkedin.com/in/mabe-carvalho2210/', '_blank', 'noreferrer noopener')}
				>
					💻 Me siga no LinkedIn
				</button>
			</a>
		</div>

		{/* Rodapé */}
		<footer className="text-black text-[16px] mt-6">
			© {currentYear} Vade Estudos. Todos os direitos reservados.
		</footer>

		<div className="text-black text-[14px] mt-1 font-bold">
		Desenvolvido com ❤️ e com <a
		onClick = {() => window.open('https://nextjs.org/', '_blank', 'noreferrer noopener')}>
			<Image
				className="inline-block space-x-1 md:space-x-9 cursor-pointer"
				src="/nextjs-logo.svg"
				alt="NextJS Logo"
				width={20}
				height={10}
			/> + 
			</a>
			
			<a 
			onClick = {() => window.open('https://tailwindcss.com/', '_blank', 'noreferrer noopener')}>
			<Image
				className="inline-block space-x-1 md:space-x-9 cursor-pointer"
				src="/tailwind-logo.svg"
				alt="Tailwind Logo"
				width={20}
				height={10}
			/> por
			</a>
			<a 
			onClick = {() => window.open('https://www.instagram.com/lucas.dev.exe/', '_blank', 'noreferrer noopener')}
			className="text-black no-underline hover:underline cursor-pointer"> Lucas</a>
		</div>
		</div>
	);
}

