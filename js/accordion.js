document.addEventListener('DOMContentLoaded', function () {
  $(function () {
    $("#accordion-1").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
    $("#accordion-resizer-1").resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $("#accordion-1").accordion( "refresh" );
      }
    });
  });

  $(function () {
    $("#accordion-2").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
    $("#accordion-resizer-2").resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $("#accordion-2").accordion( "refresh" );
      }
    });
  });

  $(function () {
    $("#accordion-3").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
    $("#accordion-resizer-3").resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $("#accordion-3").accordion( "refresh" );
      }
    });
  });

  $(function () {
    $("#accordion-4").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
    $("#accordion-resizer-4").resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $("#accordion-4").accordion( "refresh" );
      }
    });
  });

  $(function () {
    $("#accordion-5").accordion({
      active: false,
      collapsible: true,
      heightStyle: "content"
    });
    $("#accordion-resizer-5").resizable({
      minHeight: 140,
      minWidth: 200,
      resize: function() {
        $("#accordion-5").accordion( "refresh" );
      }
    });
  });

});
