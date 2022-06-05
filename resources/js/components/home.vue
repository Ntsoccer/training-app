<template>
  <div>
    <v-calendar 
      :attributes = "attrs"
      is-expanded
      :events = "events"
    >
    </v-calendar>
  </div>
</template>

<script>
import { ref } from "vue"

export default {
  setup() {
    const url = 'https://holidays-jp.github.io/api/v1/date.json'

    const options = {
      "method": "get"
    }

    const getHolidays = []

    const attrs = ref([])

    const events = ref([])

    const setHoliday= async()=>{
      await fetch(url, options)
      .then(res=>{
        return res.json()
      }).then(json=>{
        for(const holiday in json){
          getHolidays = holiday
        }
        // const holidays = Object.keys(json);
        // for(const holiday of holidays){
        //   getHolidays.value.push(holiday)
        // }
      })
    }

    setHoliday()

    console.log(getHolidays)

    const setEvents=()=>{
      for(const day of getHolidays){
        const first = new Date(day)
        events.value.push({
          color: 'red',
          start: first
        })
      }
    }

    setEvents()

    console.log(events.value)

    const calendar =[
      {
          key: 'today',
          highlight: true,
          dates: new Date()
      },
    ]

   

    attrs.value = calendar

    console.log(attrs.value)

    return {getHolidays, attrs, events}
  },
}
</script>

<style>
.weekday-7 span,
.vc-weekday:nth-child(7){
    color:blue;
}

.weekday-1 span,
.vc-weekday:nth-child(1),
.holiday {
    color:red;
}

</style>