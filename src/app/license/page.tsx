import React from 'react';

export const metadata = {
  title: 'Licencia | Magic Linux',
  description: 'Información sobre la licencia de Magic Linux.',
};

export default function LicensePage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Licencia MIT</h1>
      <div className="prose max-w-full">
        <p className="mb-4">Copyright (c) 2023 OffGirdSoft</p>

        <p className="mb-4">
          Se concede permiso, de forma gratuita, a cualquier persona que obtenga una copia
          de este software y de los archivos de documentación asociados (el &quot;Software&quot;), para
          utilizar el Software sin restricción, incluyendo, sin limitación, los derechos
          para usar, copiar, modificar, fusionar, publicar, distribuir, sublicenciar y/o vender
          copias del Software, y para permitir a las personas a las que se les proporcione el
          Software a hacer lo mismo, sujeto a las siguientes condiciones:
        </p>

        <p className="mb-4">
          El aviso de copyright anterior y este aviso de permiso se incluirán en todas
          las copias o partes sustanciales del Software.
        </p>

        <p className="mb-8">
          EL SOFTWARE SE PROPORCIONA &quot;TAL CUAL&quot;, SIN GARANTÍA DE NINGÚN TIPO, EXPRESA O
          IMPLÍCITA, INCLUYENDO PERO NO LIMITADO A GARANTÍAS DE COMERCIALIZACIÓN,
          IDONEIDAD PARA UN PROPÓSITO PARTICULAR Y NO INFRACCIÓN. EN NINGÚN CASO LOS
          AUTORES O TITULARES DEL COPYRIGHT SERÁN RESPONSABLES DE NINGUNA RECLAMACIÓN,
          DAÑOS U OTRAS RESPONSABILIDADES, YA SEA EN UNA ACCIÓN DE CONTRATO, AGRAVIO O
          CUALQUIER OTRO MOTIVO, QUE SURJA DE O EN CONEXIÓN CON EL SOFTWARE O EL USO U
          OTRO TIPO DE ACCIONES EN EL SOFTWARE.
        </p>
      </div>
    </div>
  );
}
