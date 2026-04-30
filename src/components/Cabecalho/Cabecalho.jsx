import { CgProfile } from "react-icons/cg";
export default function Cabecalho() {
  return (<>
    <header className="flex items-center justify-between pl-5 pr-5 bg-[#cc0000] w-full h-24">
      <img className="w-38 h-12" src="logoSESI.jpg" alt="Logo do sesi" />
      <CgProfile color="white" size="45" />
    </header>
    <nav className="flex bg-[#ae0909] w-full h-12" ></nav>
    </>
  );
}
