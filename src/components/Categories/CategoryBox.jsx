

const CategoryBox = ({item}) => {
    const {label, icon:Icon} = item;
    return (
        <div className="flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-400">
          <Icon size={24}/>
          <div className="text-sm font-medium">
            {label}
          </div>
        </div>
    );
};

export default CategoryBox;