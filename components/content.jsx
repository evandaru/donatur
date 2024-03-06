import axios from 'axios';
import { useState, useEffect } from 'react';

function Content() {
    // eslint-disable-next-line no-unused-vars
    const [data, setData] = useState([]);
    const [totalNominal, setTotalNominal] = useState(0);
    const [totalDonatur, setTotalDonatur] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'POST',
                    url: `https://donatur.vercel.app` + `/api`,

                    // data: { page_size: 100 }
                };

                const response = await axios.request(options);
                setData(response.data.results);

                let total = 0;
                response.data.results.forEach(item => {
                    total += item.properties.Nominal.number;
                });
                setTotalNominal(total);

                setTotalDonatur(response.data.results.length);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);


    return (
        <section className="bg-white dark:bg-gray-900 ">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                    <div
                        href="#"
                        className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md dark:bg-gray-700 dark:text-blue-400 mb-2"
                    >
                        Ramadhan Mubarok
                    </div>
                    <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                        Laporan Keuangan Donatur Masuk FOKAMM
                    </h1>
                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                        Aska Sus
                    </p>


                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">

                        <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-2">
                            Jumlah Donatur
                        </h2>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                            {totalDonatur} Orang
                        </h1>

                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Semoga Allah membalas mereka dengan kebaikan
                        </p>


                    </div>
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12">
                        <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-2">
                            Jumlah Nominal yang masuk
                        </h2>
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">
                            IDR {totalNominal}.000
                        </h1>

                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-4">
                            Semoga Allah membalas mereka dengan kebaikan
                        </p>
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Content