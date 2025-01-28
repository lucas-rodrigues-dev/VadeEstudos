"use client";
import Image from "next/image";
import Swal from "sweetalert2";

export default function Home () {
		const currentYear = new Date().getFullYear();

		const handleAlert = (message: string) => {
			Swal.fire({
				title: "Aguarde!",
				text: message,
				icon: "info",
				confirmButtonText: "Entendi",
				confirmButtonColor: "#8b1c41",
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
				href="https://www.instagram.com/vade.estudos/"
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
			href="https://w.app/hdmsfy"
			target="_blank">
				<button>
					👋🏻 Entre em Contato Comigo
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"
			href="#"
			onClick={() => handleAlert("Em Breve Lançaremos nosso Catálogo, enquanto isso você pode me contatar para tirar dúvidas sobre o Vade ou outros assuntos 😉")}>
				<button>
					📚 Garanta o seu Material de Estudos
				</button>
			</a>

			<a 
			className="w-[70%] bg-none text-black px-4 py-4 my-2 border border-[#8b1c41] rounded-full cursor-pointer font-medium transition-all duration-500 hover:bg-[#80092f] hover:text-[#ffc3d7]"  
			href="https://www.linkedin.com/in/mabe-carvalho2210/"
			target="_blank">
				<button>
					💻 Me siga no LinkedIn
				</button>
			</a>
		</div>

		{/* Rodapé */}
		<footer className="text-black text-[17px] mt-6">
			© {currentYear} Vade Estudos. Todos os direitos reservados.
		</footer>

		<div className="text-black text-[14px] mt-1 font-bold">
			Desenvolvido Com ❤️ por <a href="https://www.instagram.com/lucas.dev.exe/" className="text-black no-underline hover:underline">Lucas</a>
		</div>
		</div>
	);
}

