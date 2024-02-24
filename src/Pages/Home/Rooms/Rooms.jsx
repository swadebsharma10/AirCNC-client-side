import { useEffect, useState } from "react";
import Container from "../../../components/Shared/Container/Container";
import Card from "./Card";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
        fetch('/public/rooms.json')
        .then(res => res.json())
        .then(data => setRooms(data))
        .catch(error =>{
            console.log(error.message)
        })
    }, [])

    return (
        <Container>
         <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
            {
                rooms.map(room => <Card
                    key={room.id}
                    room={room}
                    ></Card>)
            }
         </div>
        </Container>
    );
};

export default Rooms;