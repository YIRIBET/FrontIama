import React, { useState } from "react";

function AdminCateg() {
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [modalCategoria, setModalCategoria] = useState(false);


  const mostrarAgregar = () => {
    setModalAgregar(true);
  };

  const cerrarAgregar = () => {
    setModalAgregar(false);
  };

  const mostrarUpdate = () => {
    setModalUpdate(true);
  };

  const cerrarUpdate = () => {
    setModalUpdate(false);
  };
  const mostrarCategoria = () => {
    setModalCategoria(true);
  };

  const cerrarCategoria= () => {
    setModalCategoria(false);
  };

  return (
    <>
      <div className="">
      <div class="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
            <label htmlFor="table-search" className="sr-only">
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="table-search"
                className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar"
              />
            </div>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              onClick={mostrarCategoria}
            >
              Crear categoría
            </button>
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Reporte
            </button>
          </div>

          <div className="flex flex-end mb-4">
            <h5 className="mb-2 mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Categoría
            </h5>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <a
              href="#"
              className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <div className="flex items-center justify-between mb-4">
                <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                  Tecnología
                </h5>
                <button
                  type="button"
                  className="text-white hover:bg-red-200 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  <svg
                    className="w-[31px] h-[31px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                    />
                  </svg>
                </button>
              </div>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <div className="flex space-x-2 justify-end items-end mr-4">
                <button
                  onClick={mostrarAgregar}
                  type="button"
                  className="mt-4 text-white hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  <svg
                    className="w-[31px] h-[31px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <button
                  onClick={mostrarUpdate}
                  type="button"
                  className="text-white hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-white-600 dark:hover:bg-white-700 dark:focus:ring-white-800"
                >
                  <svg
                    className="w-[31px] h-[31px] text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    />
                  </svg>
                </button>
              </div>
            </a>
          </div>
        </div>
      </div>

      {modalAgregar && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
        >
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 md:p-6">
            <div className="flex justify-between items-center pb-4">
              <h3 className="text-lg font-semibold text-gray-900">
               Crear nuevo producto
              </h3>
              <button
                onClick={cerrarAgregar}
                className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
              </button>
            </div>

            <form className="space-y-4">
            <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Escritorio"
                    required
                  />
              <div className="grid grid-cols-2 gap-4">
              <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Categoría
                  </label>
                  <select
                    id="category"
                    className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option defaultValue>Selecciona la categoría</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-900"
                  >
                    Tipo
                  </label>
                  <select
                    id="category"
                    className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option defaultValue>Selecciona el tipo</option>
                    <option value="TV">TV/Monitors</option>
                    <option value="PC">PC</option>
                    <option value="GA">Gaming/Console</option>
                    <option value="PH">Phones</option>
                  </select>
                </div>
                
              </div>

            </form>
            
            <button
                type="submit"
                className="mt-7  justify-center text-white bg-green-700 hover:bg-green-800 rounded-lg px-5 py-2.5 text-center"
              >
                Agregar
              </button>
          </div>
        </div>
      )}

      {modalUpdate && (
         <div
         id="crud-modal"
         tabIndex="-1"
         aria-hidden="true"
         className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
       >
         <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 md:p-6">
           <div className="flex justify-between items-center pb-4">
             <h3 className="text-lg font-semibold text-gray-900">
              Actualizar Categoría
             </h3>
             <button
               onClick={cerrarUpdate}
               className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
             >
               <svg
                 className="w-3 h-3"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 14 14"
               >
                 <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                 />
               </svg>
             </button>
           </div>

           <form className="space-y-4">
           <label
                   htmlFor="name"
                   className="block text-sm font-medium text-gray-900"
                 >
                   Nuevo nombre
                 </label>
                 <input
                   type="text"
                   id="name"
                   className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Escritorio"
                   required
                 />
             

           </form>
           
           <button
              type="submit"
              className="mt-6 flex items-center justify-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
              Editar
            </button>
         </div>
       </div>
      )}

{modalCategoria && (
         <div
         id="crud-modal"
         tabIndex="-1"
         aria-hidden="true"
         className="fixed top-0 right-0 left-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50"
       >
         <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-4 md:p-6">
           <div className="flex justify-between items-center pb-4">
             <h3 className="text-lg font-semibold text-gray-900">
              Crear Categoría
             </h3>
             <button
               onClick={cerrarCategoria}
               className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex items-center justify-center"
             >
               <svg
                 className="w-3 h-3"
                 aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg"
                 fill="none"
                 viewBox="0 0 14 14"
               >
                 <path
                   stroke="currentColor"
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                 />
               </svg>
             </button>
           </div>

           <form className="space-y-4">
           <label
                   htmlFor="name"
                   className="block text-sm font-medium text-gray-900"
                 >
                   Nuevo nombre
                 </label>
                 <input
                   type="text"
                   id="name"
                   className="border border-gray-300 rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
                   placeholder="Escritorio"
                   required
                 />
             

           </form>
           
           <button
              type="submit"
              className="mt-6 flex items-center justify-center focus:outline-none text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
              >
                Crear
            </button>
         </div>
       </div>
      )}
    </>
  );
}

export default AdminCateg;
