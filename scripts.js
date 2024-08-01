$(document).ready(function() {
    function loadinQuotes() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/quotes",
            method: "GET",
            beforeSend: function() {
                $("#loader").show();
                $("#carouselExampleControls").hide();
            },
            success: function(data) {
                data.forEach(function(quote, index) {
                    var activeClass = index === 0 ? 'active' : '';
                    var quoteHtml = `
                        <div class="carousel-item ${activeClass}">
                            <div class="row mx-auto align-items-center">
                                <div class="col-12 col-sm-2 col-lg-2 offset-lg-1 text-center">
                                    <img src="${quote.pic_url}" class="d-block align-self-center" alt="Carousel Pic ${index + 1}" />
                                </div>
                                <div class="col-12 col-sm-7 offset-sm-2 col-lg-9 offset-lg-0">
                                    <div class="quote-text">
                                        <p class="text-white">« ${quote.text}</p>
                                        <h4 class="text-white font-weight-bold">${quote.name}</h4>
                                        <span class="text-white">${quote.title}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                    $("#carousel-inner").append(quoteHtml);
                });
            },
            complete: function() {
                $("#loader").hide();
                $("#carouselExampleControls").show();
            },
            error: function() {
                console.log("doesn't wrk");
            }
        });
    }

    // this one works 
    function loadinPopularVids() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/popular-tutorials",
            method: "GET",
            beforeSend: function() {
                $("#loader-popular").show();
                $("#carouselPopularTutorials").hide();
            },
            success: function(data) {
                data.forEach(function(video) {
                    var videoHtml = `
                    <div class="card m-3">
                    <img
                      src="${video.thumb_url}"
                      class="card-img-top"
                      alt="Video thumbnail"
                    />
                    <div class="card-img-overlay text-center">
                      <img
                        src="images/play.png"
                        alt="Play"
                        width="64px"
                        class="align-self-center play-overlay"
                      />
                    </div>
                    <div class="card-body">
                      <h5 class="card-title font-weight-bold">
                        ${video.title}
                      </h5>
                      <p class="card-text text-muted">
                        ${video['sub-title']}
                      </p>
                      <div class="creator d-flex align-items-center">
                        <img
                          src="${video.author_pic_url}"
                          alt="Creator of Video"
                          width="30px"
                          class="rounded-circle"
                        />
                        <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                      </div>
                      <div class="info pt-3 d-flex justify-content-between">
                        <div class="rating">
                          <img
                            src="images/star_on.png"
                            alt="star on"
                            width="15px"
                          />
                          <img
                            src="images/star_on.png"
                            alt="star on"
                            width="15px"
                          />
                          <img
                            src="images/star_on.png"
                            alt="star on"
                            width="15px"
                          />
                          <img
                            src="images/star_on.png"
                            alt="star on"
                            width="15px"
                          />
                          <img
                            src="images/star_off.png"
                            alt="star on"
                            width="15px"
                          />
                        </div>
                        <span class="main-color">${video.duration}</span>
                      </div>
                    </div>
                  </div>
                `;
                    $("#popular-tutorials").append(videoHtml);
                });

                $("#popular-tutorials").slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },
            complete: function() {
                $("#loader-popular").hide();
                $("#carouselPopularTutorials").show();
            },
            error: function() {
                console.log("doesnt work");
            }
        });
    }

    // this one doesnt work
    function loadinLatestVids() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/latest-videos",
            method: "GET",
            beforeSend: function() {
                $("#loader-latest").show();
                $("#carouselofLatestvids").hide();
            },
            success: function(data) {
                data.forEach(function(video) {
                    var videoHtml = `
                    <div class="card m-3">
                        <img
                          src="${video.thumb_url}"
                          class="card-img-top"
                          alt="Video thumbnail"
                        />
                        <div class="card-img-overlay text-center">
                          <img
                            src="images/play.png"
                            alt="Play"
                            width="64px"
                            class="align-self-center play-overlay"
                          />
                        </div>
                        <div class="card-body">
                          <h5 class="card-title font-weight-bold">
                            ${video.title}
                          </h5>
                          <p class="card-text text-muted">
                            ${video['sub-title']}
                          </p>
                          <div class="creator d-flex align-items-center">
                            <img
                              src="${video.author_pic_url}"
                              alt="Creator of Video"
                              width="30px"
                              class="rounded-circle"
                            />
                            <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                          </div>
                          <div class="info pt-3 d-flex justify-content-between">
                            <div class="rating">
                              <img
                                src="images/star_on.png"
                                alt="star on"
                                width="15px"
                              />
                              <img
                                src="images/star_on.png"
                                alt="star on"
                                width="15px"
                              />
                              <img
                                src="images/star_on.png"
                                alt="star on"
                                width="15px"
                              />
                              <img
                                src="images/star_on.png"
                                alt="star on"
                                width="15px"
                              />
                              <img
                                src="images/star_off.png"
                                alt="star on"
                                width="15px"
                              />
                            </div>
                            <span class="main-color">${video.duration}</span>
                          </div>
                        </div>
                      </div>
                    `;
                    $("#loading-lastest-vids").append(videoHtml);
                });
    
                $("#loading-lastest-vids").slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    responsive: [
                        {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        },
                        {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1
                            }
                        },
                        {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });
            },
            complete: function() {
                $("#loader-latest").hide();
                $("#carouselofLatestvids").show();
            },
            error: function() {
                console.log("doesnt work");
            }
        });
    }

    $(document).ready(function() {
        loadinQuotes();
        loadinPopularVids();
        loadinLatestVids();
    });
});

// starting courses functions
$(document).ready(function() {
    let searchKeywords = '';
    let selectedTopic = 'All';
    let selectedSort = 'Most Popular';

    // fixed synta 
    const fixinNames = {
        "most_popular": "Most Popular",
        "most_recent": "Most Recent",
        "most_viewed": "Most Viewed"
    };

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
    function loadinThoseDropdowns() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/courses",
            method: "GET",
            success: function(data) {
                let topicsHtml = '<a class="dropdown-item" href="#" data-topic="All">All</a>';
                let topicsSet = new Set(data.topics.map(topic => capitalizeWords(topic)));
                topicsSet.delete('All')
                topicsSet.forEach(topic => {
                    topicsHtml += `<a class="dropdown-item" href="#" data-topic="${topic}">${topic}</a>`;
                });
                $('#topic-dropdown').html(topicsHtml);

                let sortHtml = '';
                data.sorts.forEach(sort => {
                    sortHtml += `<a class="dropdown-item" href="#" data-sort="${sort}">${fixinNames[sort]}</a>`;
                });
                $('#sort-dropdown').html(sortHtml);
            }
        });
    }

    // loading from the api 
    function loadinThoseCourses() {
        $('#courses-loader').show();
        $('#courses-results').hide();

        $.ajax({
            url: "https://smileschool-api.hbtn.info/courses",
            method: "GET",
            data: {
                q: searchKeywords,
                topic: selectedTopic,
                sort: selectedSort
            },
            success: function(data) {
                let videoCount = data.courses.length;
                $('.video-count').text(`${videoCount} videos`);

                let coursesHtml = '';
                data.courses.forEach(course => {
                    let stars = '';
                    for (let i = 1; i <= 5; i++) {
                        stars += `<img src="images/${i <= course.star ? 'star_on' : 'star_off'}.png" alt="star ${i <= course.star ? 'on' : 'off'}" width="15px" />`;
                    }

                    coursesHtml += `
                    <div class="col-12 col-sm-4 col-lg-3 d-flex justify-content-center">
                        <div class="card">
                            <img src="${course.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                            <div class="card-img-overlay text-center">
                                <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title font-weight-bold">${course.title}</h5>
                                <p class="card-text text-muted">${course['sub-title']}</p>
                                <div class="creator d-flex align-items-center">
                                    <img src="${course.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
                                    <h6 class="pl-3 m-0 main-color">${course.author}</h6>
                                </div>
                                <div class="info pt-3 d-flex justify-content-between">
                                    <div class="rating">${stars}</div>
                                    <span class="main-color">${course.duration}</span>
                                </div>
                            </div>
                        </div>
                    </div>`;
                });

                $('#courses-results').html(coursesHtml);
                $('#courses-loader').hide();
                $('#courses-results').show();
            },
            error: function() {
                console.log("is currently failing hard");
            }
        });
    }

    // finally working
    $('#search-keywords').on('input', function() {
        searchKeywords = $(this).val();
        loadinThoseCourses();
    });

    $('#topic-dropdown').on('click', 'a', function() {
        selectedTopic = $(this).data('topic');
        $('#selected-topic').text(selectedTopic);
        loadinThoseCourses();
    });

    $('#sort-dropdown').on('click', 'a', function() {
        selectedSort = $(this).data('sort');
        $('#selected-sort').text(fixinNames[selectedSort]);
        loadinThoseCourses();
    });

    loadinThoseDropdowns();
    loadinThoseCourses();
});