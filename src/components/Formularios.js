import { ColumnDirective, ColumnsDirective, GridComponent, Inject } from '@syncfusion/ej2-react-grids';
import { Toolbar, Edit } from '@syncfusion/ej2-react-grids';
import * as React from 'react';


export function Formularios() {
    const editOptions = { allowEditing: true, allowAdding: true, allowDeleting: true };
    const toolbarOptions = [
        { text: 'Añadir' }, { text: 'Editar' }, { text: 'Eliminar' }, { text: 'Actualizar' }, { text: 'Cancelar' },
        { text: 'Click', tooltipText: 'Click', prefixIcon: 'e-click', id: 'Click' }
    ];
    const clickHandler = (args) => {
        if (args.item.id === 'Click') {
            alert("¿Esta seguro de salir sin guardar cambios?");
        }
    };
    return (<GridComponent toolbar={toolbarOptions} toolbarClick={clickHandler} editSettings={editOptions} height={240}>
        <ColumnsDirective>
          <ColumnDirective field='Formulario N°' width='100' textAlign="Right"/>
          <ColumnDirective field='AdministradorID' width='100'/>
          <ColumnDirective field='EncargadoID' width='100' textAlign="Right"/>
          <ColumnDirective field='Estado' width='100' format="C2" textAlign="Right"/>
          <ColumnDirective field='Detalles' width='100'/>
        </ColumnsDirective>
        <Inject services={[Toolbar, Edit]}/>
    </GridComponent>);
}
