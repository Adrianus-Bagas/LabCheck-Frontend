import AdminCarousel from "./AdminCarousel";

function DasboardAdminContent(){
    return <>
      <div className="p-4">
        <h1 className="text-center text-5xl m-2 font-bold text-black">LabCheck</h1>
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
          <AdminCarousel/>
        </div>
      </div>
    </>
}

export default DasboardAdminContent;