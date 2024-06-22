function Footer() {
  return (
    <footer className="relative bottom-0 w-full bg-slate-800 text-[#d8d8d8] py-4">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-center">© 2024 Filmes de Junho. Todos os direitos reservados.</p>
      </div>
      <div className="container mx-auto flex justify-center mt-4">
        <a target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" alt="Facebook" className="h-6 w-6" />
        </a>
        <a target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/twitter--v1.png" alt="Twitter" className="h-6 w-6" />
        </a>
        <a target="_blank" rel="noopener noreferrer" className="mx-2">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" alt="Instagram" className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
