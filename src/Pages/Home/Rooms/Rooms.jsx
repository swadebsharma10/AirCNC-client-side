import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Heading from "../../../components/Heading/Heading";
import Container from "../../../components/Shared/Container/Container";
import Loader from "../../../components/Shared/Loading/Loader";
import Card from "./Card";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(false);

    const [params, setParams] = useSearchParams();
    const category = params.get('category');
    // console.log(category)

    useEffect(()=>{
        setLoading(true);
        fetch('/public/rooms.json')
        .then(res => res.json())
        .then(data => {
            if(category){
                const filtered = data.filter(room => room.category === category)
                setRooms(filtered)
            }
            else{
                 setRooms(data);
            }
            setLoading(false)
        })
        .catch(error =>{
            console.log(error.message)
        })
    }, [category]);
    
    if(loading){
        return <Loader></Loader>
    }

    return (
        <Container>
        {rooms && rooms.length > 0 ? <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {
                rooms.map(room => <Card
                    key={room.image}
                    room={room}
                    ></Card>)
            }
         </div> 
        : 
         <div className="pt-12">
         <Heading
         title={'No Rooms Available in This Room'}
         subtitle={'Please Select Other Categories'}
         center={true}
         />
         </div>
    }
        </Container>
    );
};

export default Rooms;