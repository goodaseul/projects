/* 유효성검사 */
$.validator.setDefaults({
  ignore:".ignore",
  errorElement : "div",
  onclick: function (element) {
    $(element).valid(); 
  },
  onkeyup: function (element) {
    $(element).valid(); 
  },
  highlight: function(element, errorClass, validClass) {
    const inputRow = $(element).closest(".input-row");

    errorClass += "-row";
    validClass += "-row";

    if (element.id == "agency") {
      $(this.currentForm).find(".input-row.agency").addClass(errorClass).removeClass(validClass);
    }

    inputRow.addClass(errorClass).removeClass(validClass);
  },
  unhighlight: function(element, errorClass, validClass) {
    const inputRow = $(element).closest(".input-row"),
          inputLength = inputRow.find("input").length,
          inputInvalidLength = inputRow.find("input[aria-invalid='false']").not(element).length;

    errorClass += "-row";
    validClass += "-row";

    if (inputLength > 1) {
      if (inputLength === inputInvalidLength + 1) {
        inputRow.removeClass(errorClass).addClass(validClass);
      }
    } else {
      if (element.id == "agency") {
        $(this.currentForm).find(".input-row.agency").removeClass(errorClass).addClass(validClass);
      }

      inputRow.removeClass(errorClass).addClass(validClass);
    }
  },
  showErrors: function(errorMap, errorList) {
    // const filterInvalid = Object.fromEntries(Object.entries(this.invalid).filter(([key]) => key != "")),
    //       disabled = Object.values(filterInvalid).filter(field => !field).length === Object.keys(this.settings.messages).length;
    // $(this.currentForm).find(":submit").prop("disabled", !disabled);
    this.defaultShowErrors();
  }
});
/* //유효성검사 */