PRUEBA DE CARGA LOGIN - FAKESTORE API

Autor: Samuel Graciano

Tecnologías utilizadas

- Apache JMeter 5.6.3
- Java 17
- FakeStore API

Objetivo

Ejecutar una prueba de carga sobre el endpoint:

https://fakestoreapi.com/auth/login

Los datos de entrada fueron parametrizados desde un archivo CSV utilizando el componente CSV Data Set Config de JMeter.

Archivos incluidos

- login-test.jmx
- data\users.csv
- conclusiones.txt
- evidencias HTML generado por JMeter
- evidencias de ejecución

Datos de prueba

Los usuarios son leídos desde data\users.csv y enviados dinámicamente a la petición POST de autenticación.

Ejecución

1. Abrir Apache JMeter 5.6.3.
2. Cargar login-test.jmx.
3. Verificar la ruta del archivo users.csv
4. Ejecutar la prueba.

Generación del reporte HTML

jmeter -n -t login-test.jmx -l results.jtl -e -o reporte

Resultados obtenidos
   75 hilos
- Total Solicitudes: 750
- Throughput: 47.01 TPS
- Tiempo promedio: 725.60 ms
- Error Rate: 2.13%

   20 hilos
- Solicitudes: 200
- Throughput: 10.92 TPS
- Tiempo promedio: 736.56 ms
- Error Rate: 2.50 %
- Tiempo máximo: 2813 ms

Conclusión

La prueba cumple los criterios de aceptación definidos en el ejercicio.