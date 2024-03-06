import axios from 'axios';
import { useState, useEffect } from 'react';

function Table() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'POST',
                    url: `https://donatur.vercel.app` + `/api`,

                    // headers: {
                    //     Authorization: 'secret_dDkyTm301ESI6KmEYwLvZcoMrWWRqC9VRsxHftCwa6A',
                    //     accept: 'application/json',
                    //     'Notion-Version': '2022-06-28',
                    //     'content-type': 'application/json'
                    // },
                    // data: { page_size: 100 }
                };

                const response = await axios.request(options);
                setData(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="py-1 px-4 mx-auto max-w-screen-xl lg:py-1">
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nama Donatur
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tanggal Masuk
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Metode Pembayaran
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nominal
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Bukti Donasi
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                Apple MacBook Pro 17
                            </th>
                            <td className="px-6 py-4">Silver</td>
                            <td className="px-6 py-4">Laptop</td>
                            <td className="px-6 py-4">$2999</td>
                            <td className="px-6 py-4">Coming soon</td>

                        </tr> */}

                        {data.map((item, index) => (
                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <td className="px-6 py-4">{index + 1}</td>
                                <td className="px-6 py-4">{item.properties.Name.title[0].plain_text}</td>
                                <td className="px-6 py-4">{item.properties.Date.date.start}</td>
                                <td className="px-6 py-4">{item.properties.PaymentMethod.select.name}</td>
                                <td className="px-6 py-4">IDR {item.properties.Nominal.number}.000</td>
                                <td className="px-6 py-4">Masih tahap Pengembangan</td>

                            </tr>
                        ))}




                    </tbody>
                </table>
            </div>



        </div>
    )
}
export default Table