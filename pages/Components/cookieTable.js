export default function CookieTable({render ,total}){

    const data = ['Location','6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','Totals']


    return(
        <>
        {render .length?
         <table className="w-1/2 mx-auto my-4">
          <thead>

            <tr className="bg-green-500">
                {data.map(item =>
                
                    <th className="border border-gray-70">{item}</th>
                
                )
              
}
            </tr>
          </thead>
          <tbody>
            {render .map((item,idx) => (
              <tr  key={`${idx}`} className={`bg-green-${idx % 2 ? 500:300}`}>
                <td className="pl-2 border border-gray-700 ">{item.location}</td>
                {   

                    item.salePerHour.map((hour,key)=>
                <td key={`${key}`} className="pl-2 border border-gray-700">{hour}</td>
                )}
                <td className="pl-2 border border-gray-700">{item.sum}</td>
              </tr>))}
              <tr className="bg-green-400">
                  <th className="pl-2 border border-gray-700" >Totals</th>
                  {
                      total[0].map((item,key) =>
                    <td key={`${key}`} className="pl-2 border border-gray-700" > {item}</td>
                      )}
                      <td className="pl-2 border border-gray-700" > {total[1]}</td>

              </tr>
          </tbody>
        </table>:
        <h2 className="text-center" >
            No Cookie Stand Available
        </h2>

        }


        </>
    )


}