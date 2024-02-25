import Heading from "../../../components/Heading/Heading";


const Header = () => {
    return (
        <>
        <Heading
        title={'Surat Thani, Thailand'}
        subtitle={'Abiansemal, Bali'}
        /> 
        
        <div className="w-full md:h-[70vh] overflow-hidden rounded-lg">
            <img 
            className="object-cover w-full"
            src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" alt="Banner" />
        </div>
        </>
    );
};

export default Header;