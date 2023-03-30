function Card() {
    return (
        <>
            <div class="flex justify-center items-center h-screen w-full bg-gradient-to-r from-blue-300 to-blue-700">
                <div class="w-1/2 bg-white rounded-lg shadow-2xl p-8 m-4">
                    <h1 class="block w-full tect-center tect-gray-800 text-2xl font-bold mb-6">
                    KTP
                    </h1>
                    <form action="/" method="post">
                        <div class="flex flex-col mb-4">
                            <label
                                class="mb-2 font-bold text-lg text-gray-900"
                                for="nama"
                                
                            >
                                Nama
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="nama"
                                id="naam"
                            />
                            <label
                                 class="mb-2 font-bold text-lg text-gray-900"
                                 for="Tempat/Tgl lahir"
                            >
                                Tempat/Tgl lahir
                            </label>
                            <input
                                class="border py-2 px-3 text-grey-800"
                                type="text"
                                name="Tempat/Tgl lahir"
                                id="naam"
                            />
                            <label
                                class="mb-2 font-bold tect-ig text-grey-900"
                                for="Tempat/Tgl lahir"
                            >
                                Jenis Kelamin
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Jenis Kelamin"
                                 id="naam"
                            />
                            <label
                                class="mb-2 font-bold tect-ig text-grey-900"
                                for="Jenis Kelamin"
                            >
                                Gol.Darah
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Gol.Darah"
                                 id="naam"
                            />
                            <label
                            class="mb-2 font-bold tect-ig text-grey-900"
                            for="Gol.Darah"
                            >
                                Agama
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Agama"
                                 id="naam"
                            />
                            <label
                                class="mb-2 font-bold tect-ig text-grey-900"
                                for="Agama"
                            >
                                Status Perkawinan
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Status Perkawinan"
                                 id="naam"
                            />
                            <label
                                class="mb-2 font-bold tect-ig text-grey-900"
                                for="Status Perkawinan"
                            >
                                Pekerjaan
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Pekerjaan"
                                 id="naam"
                            />
                            <label
                                class="mb-2 font-bold tect-ig text-grey-900"
                                for="Pekerjaan"
                            >
                                Kewarganegaraan
                            </label>
                            <input
                                 class="border py-2 px-3 text-grey-800"
                                 type="text"
                                 name="Kewarganegaraan"
                                 id="naam"
                            />
                            <label
                            class="mb-2 font-bold tect-ig text-grey-900"
                            for="Kewarganegaraan"
                            />
                            
                    </div>
                        <button
                        class="block bg-green-400 hover:bg-blue-600 text-white uppercase text-lg mx-auto p-4 rounded"
                        type="submit"
                        >
                            Buat Akun
                        </button>
                    </form>
                    <a
                        class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gry-900"
                        href="/"
                    >
                        Telah Memiliki Akun?
                    </a>
                </div>
            </div>
        </>
    );
}

export default Card;