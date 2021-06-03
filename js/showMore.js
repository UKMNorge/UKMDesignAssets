jQuery(document).on('click', '.vis-mer-btn', function(e) {
    e.preventDefault();
    var next_page = $('.vis-mer-btn').attr('href');
    var content =  ($('<div />').load(next_page + ' .category-page'));
    var final_content = content.find(".container .category-page").contents().unwrap(); 
    $('.category-page').append(
       final_content
      );
    
});