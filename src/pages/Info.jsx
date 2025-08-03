import React from "react";

function Info() {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-center">¿Dónde estamos?</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Mapa */}
        <div className="w-full md:w-1/2 h-[300px] md:h-[400px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9259.424780439895!2d-57.900934816683765!3d-34.863738905043526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e577da97df67%3A0x8e10fdbbfc8e2142!2sJuventud%20Unida%20Ensenada!5e0!3m2!1ses-419!2sar!4v1754189026695!5m2!1ses-419!2sar"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Texto descriptivo */}
        <div className="w-full md:w-1/2 text-white">
          <p className="text-lg mb-4">
            Nombre Completo: Club Social, Cultural y Deportivo Juventud Unida de Ensenada
          </p>
          <p>
            Fecha de Fundación: 7 de Enero de 2015
          </p>
          <p>
            Sede: Ortiz de Rosas y Almafuerte
Predio Infantil: Ingeniero Medici y Almafuerte
          </p>
          <p>
            Club fundador de la Liga Amistad, liga en la que compite con 8 titulos obtenidos hasta la fecha
          </p>
        </div>
      </div>
    </div>
  );
}

export default Info;
