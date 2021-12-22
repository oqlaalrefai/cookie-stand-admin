import React, { useState } from "react";
export default function CookieForm(props) {

    return (
        <div>
            <div className="w-2/3 h-56 mx-auto my-10 bg-green-300 rounded-lg ">
                <h2 className="flex items-center justify-center h-12 text-xl "> Cookie Stand Admin</h2>
                <form onSubmit={props.tabelHandelar}>
                    <div>
                        <label for="location" className="ml-3 mr-2">Location</label>
                        <input type="text" name="location" id="location" className="flex-auto w-10/12 mt-2 bg-gray-200 rounded-sm" />
                    </div>
                    <div className="flex mx-3 my-4 mt-8 justify-evenly w-7/8">
                        <div className="m-1 bg-green-200">
                            <label for="min" className="pr-1">Minumum Customers Per Hour</label>
                            <br />
                            <input type="text" name="min" id="min" className="" />
                        </div>
                        <div className="m-1 bg-green-200">
                            <label for="maximumPrehour" className="pr-1">maximum Customers per hour
                            </label>
                            <br />
                            <input type="text" name="maximumPrehour" id="maximumPrehour" className="" />
                        </div>
                        <div className="m-1 bg-green-200">
                            <label for="avg" className="pr-1">Average Cookies per Sale </label>
                            <br />
                            <input type="text" name="avg" id="avg" className="" />

                        </div>
                        <div className="flex-grow w-5 mx-3 my-1 font-semibold bg-green-600 rounded">
                            <button className="h-12 ml-20 text-xl text-center " >Create </button>
                        </div>
                    </div>


                </form>

            </div>

        </div>
    )
}