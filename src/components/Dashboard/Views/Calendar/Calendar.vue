<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-10 col-md-offset-1">
        <div class="card card-calendar">
          <div class="card-content">
            <div id="fullCalendar"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import swal from 'sweetalert2'
  import $ from 'jquery'
  import 'fullcalendar'

  var today = new Date()
  // var y = today.getFullYear()
  // var m = today.getMonth()
  // var d = today.getDate()
  export default {
    data () {
      return {
        events: []
      }
    },
    methods: {
      initCalendar ($) {
        var self = this
        var $calendar = $('#fullCalendar')
        $calendar.fullCalendar({
          header: {
            left: 'title',
            center: 'month,agendaWeek,agendaDay',
            right: 'prev,next,today'
          },
          defaultDate: today,
          selectable: false,
          selectHelper: true,
          views: {
            month: { // name of view
              titleFormat: 'MMMM YYYY'
              // other view-specific options here
            },
            week: {
              titleFormat: ' MMMM D YYYY'
            },
            day: {
              titleFormat: 'D MMM, YYYY'
            }
          },
          select: function (start, end) {
            // on select we show the Sweet Alert modal with an input
            swal({
              title: 'Create an Event',
              html: '<div class="form-group">' +
              '<input class="form-control" placeholder="Event Title" id="input-field">' +
              '</div>',
              showCancelButton: true,
              confirmButtonClass: 'btn btn-success',
              cancelButtonClass: 'btn btn-danger',
              buttonsStyling: false
            }).then(function (result) {
              var eventData
              var eventTitle = $('#input-field').val()
              if (eventTitle) {
                eventData = {
                  title: eventTitle,
                  start: start,
                  end: end
                }
                $calendar.fullCalendar('renderEvent', eventData, true) // stick? = true
              }
              $calendar.fullCalendar('unselect')
            })
          },
          editable: true,
          eventLimit: true, // allow "more" link when too many events

          // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
          events: self.events
        })
      }
    },
    mounted () {
      window.$ = window.jQuery = $
      this.initCalendar($)
    }
  }
</script>
<style>
  #fullCalendar {
    min-height: 300px;
  }

  .el-loading-spinner .path {
    stroke: #66615B !important;
  }
</style>
