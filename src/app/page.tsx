"use client";
import Image from "next/image";

export default function Home () {
		const currentYear = new Date().getFullYear();

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
				href="https://www.instagram.com/vade.estudos/"
				className="text-black no-underline hover:underline"
				rel="noreferrer noopener"
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
			href="https://api.whatsapp.com/send?phone=5561981576620&text=Ol%C3%A1%2C%20vim%20pelo%20seu%20linktree%20e%20tenho%20interesse%20em%20seus%20produtos"
			rel="noreferrer noopener"
			target="_blank">
				<button>
					👋🏻 Entre em Contato Comigo
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"
			href="https://vade-estudos-store.vercel.app/"
			rel="noreferrer noopener"
			target="_blank">
				<button>
					📚 Garanta o seu Material de Estudos
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"  
			href="https://www.linkedin.com/in/mabe-carvalho2210/"
			target="_blank"
			rel="noreferrer noopener">
				<button>
					💻 Me siga no LinkedIn
				</button>
			</a>
		</div>

		{/* Rodapé */}
		<footer className="text-black text-[16px] mt-6">
			© {currentYear} Vade Estudos. Todos os direitos reservados.
		</footer>

		<div className="text-black text-[14px] mt-1 font-bold">
		Desenvolvido com <a 
		href="https://nextjs.org/"
		rel="noreferrer noopener"
		target="_blank"
		>
			<Image
				className="inline-block space-x-1 md:space-x-9"
				src="/nextjs-logo.svg"
				alt="NextJS Logo"
				width={20}
				height={10}
			/> por
			</a>
			<a 
			className="text-black no-underline hover:underline" 
			href="https://www.instagram.com/lucas.dev.exe/" 
			rel="noreferrer noopener"> Lucas</a>
		</div>
		</div>
	);
}

