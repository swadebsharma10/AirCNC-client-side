import Container from "../Shared/Container/Container";
import CategoryBox from "./CategoryBox";
import { categories } from "./categoriesData";

const Categories = () => {

    // const [categories, setCategories] = useState([])

    return (
        <Container>
           <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto gap-4">
            {
                categories.map(item =>  <CategoryBox
                    key={item.label}
                    item={item}
                    ></CategoryBox> )
            }
           </div>
        </Container>
    );
};

export default Categories;