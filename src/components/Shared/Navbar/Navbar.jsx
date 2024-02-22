import Container from "../Container/Container";
import Logo from "./Logo";
import MenuDropdown from "./MenuDropdown";
import Search from "./Search";


const Navbar = () => {
    return (
        <div className="fixed w-full bg-white shadow-sm">
            <div className="py-4 border-b-[1px]">
            <Container>
                <div className="flex flex-row items-center justify-between gap-4 md:gap-0">
                   <Logo/>
                    <Search/>
                    <MenuDropdown/>
                </div>
            </Container>
            </div>
        </div>
    );
};

export default Navbar;