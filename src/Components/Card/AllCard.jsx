
import SingleCard from '../SingleCards/SingleCard';



const AllCard = ({data}) => {

    const products=data
    return (

    <div className=''>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>
        {
            products.map(product=>{

               return  <SingleCard key={product.id} product={product}></SingleCard>
            })
        }

        </div>
 

</div>

    );
};

export default AllCard;