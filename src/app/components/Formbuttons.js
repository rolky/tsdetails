
import Link from 'next/link'
const FormButtons = ({cancelTo}) => {
  return ( 
    <div className="flex space-x-4 ">
        <button type="submit" className="py-2 px-4 bg-green-400 text-white font-semibold rounded hover:bg-primary-600">Save</button>
        <Link className="py-2 px-4 bg-gray-50 text-gray-500 font-semibold rounded  hover:bg-gray-100 hover:text-gray-600" href={cancelTo}>Cancel</Link>
    </div>
   );
}
 
export default FormButtons;