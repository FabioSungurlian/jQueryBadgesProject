$(function() {
  $.ajax({
    url: "https://www.codeschool.com/users/Fabio_Sungurlian.json",
    dataType: "jsonp",
    success(response){
      for(let course of response.courses.completed){
        let courseDiv = $(`<div class="course">
          <h3>${course.title}</h3>
          <img src="${course.badge}">
          <a href="${course.url}" target="_blank" class="btn btn-primary"> See Course</a>
        </div>`);
        $("#badges").append(courseDiv);
      }
    }
  });
});
