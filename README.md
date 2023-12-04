# Proceso de Creación de Vuelo

Este documento describe el flujo de trabajo que sigo para crear un vuelo en nuestra base de datos. Cada paso es esencial para asegurar que la información esté completa y sea coherente.

## Paso 1: Creación de Bases

Primero, me aseguro de que nuestras bases operativas estén registradas en el sistema. Para cada nueva base, registro:

-   **Nombre de la Base**: El nombre único que identifica la base.

## Paso 2: Registro de Aviones

Cada avión debe estar vinculado a una base, por lo que procedo a registrarlos con la siguiente información:

-   **Código del Avión**: Un identificador único para cada avión.
-   **Tipo de Avión**: El modelo o tipo del avión.
-   **Base**: Selecciono de la lista desplegable de bases existentes.

## Paso 3: Registro de Personal

Antes de asignar roles específicos, agrego a todas las personas a nuestra base de datos con su:

-   **Código de Persona**: Un código único que sirve como identificador.
-   **Nombre Completo**: El nombre de la persona.
-   **Base**: La base a la que están asignados, seleccionada de nuestras bases existentes.

## Paso 4: Especificación de Roles

Con las personas ya registradas, especifico si son pilotos o miembros de la tripulación:

### Para Pilotos:

-   Selecciono el código de persona correspondiente y confirmo su rol como piloto.

### Para Miembros de la Tripulación:

-   De igual forma, asigno a las personas como miembros de la tripulación utilizando su código de persona.

## Paso 5: Creación de un Vuelo

Con el personal y los aviones listos, creo un nuevo vuelo. Relleno los siguientes detalles:

-   **Número de Vuelo**: Un identificador único para el vuelo.
-   **Origen y Destino**: Los aeropuertos de salida y llegada.
-   **Hora de Salida y Fecha**: La hora programada y la fecha del vuelo.
-   **Avión**: El avión asignado, seleccionado de los disponibles.
-   **Piloto**: El piloto designado para el vuelo.

## Paso 6: Asignación de Tripulación

Una vez que el vuelo está creado, asigno miembros de la tripulación, asegurándome de que cada vuelo tenga la dotación necesaria.

## Paso 7: Registro de Regreso (Opcional)

Si un piloto o miembro de la tripulación regresa a la base, registro su regreso para mantener un control de su ubicación.

## Paso 8: Registro de Mantenimiento (Opcional)

Finalmente, si se realiza mantenimiento al avión, registro este evento con la fecha y los detalles del mismo.

Este flujo de trabajo me permite mantener un registro detallado y actualizado de todas las operaciones relacionadas con nuestros vuelos, asegurando la eficiencia y seguridad de nuestra aerolínea.
