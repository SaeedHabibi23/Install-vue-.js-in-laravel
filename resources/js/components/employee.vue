<template>
<div>
    <div class="container p-5">
        <table class="table tabel-stripped">
            <thead>
                <th> Name  </th>
                <th> LastName </th>
                <th> MiddleName </th>
                <th> Age </th>
                <th> Job </th>
            </thead>
            <tbody>
                <template v-for="employe in employee" :key="employe.id">
                <tr>
                    <td> {{employe.name}} </td>
                    <td> {{employe.lastname}} </td>
                    <td> {{employe.middlename}} </td>
                    <td> {{employe.age}} </td>
                    <td> {{employe.job}} </td>
                </tr>
                </template>
            </tbody>
        </table>
    </div>
</div>
    </template>

     <script>
     import {ref , onMounted} from 'vue'
     import axios from 'axios';
    export default{
        setup(){
            const employee = ref([]);

            const getEmployee = async()=>{
                let res = axios.get('api/employee')
                employee.value = res.data
            }
            onMounted(getEmployee())
            return {
                employee
            }
        }
    }
   </script>