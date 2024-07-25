$(document).ready(function() {
    function loadQuotes() {
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
                console.log("Failed to load quotes");
            }
        });
    }

    function loadPopularTutorials() {
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
                console.log("Failed to load popular tutorials");
            }
        });
    }

    function loadLatestVids() {
        $.ajax({
            url: "https://smileschool-api.hbtn.info/latest-videos",
            method: "GET",
            beforeSend: function() {
                $("#loader-latest").show();
                $("#carouselLatestVideos").hide();
            },
            success: function(data) {
                let videoHtml = '';
                data.forEach(function(video, index) {
                    if (index % 4 === 0) {
                        videoHtml += `<div class="carousel-item ${index === 0 ? 'active' : ''}"><div class="row">`;
                    }
                    videoHtml += `
                        <div class="col-12 col-sm-6 col-md-3">
                            <div class="card m-3">
                                <img src="${video.thumb_url}" class="card-img-top" alt="Video thumbnail" />
                                <div class="card-img-overlay text-center">
                                    <img src="images/play.png" alt="Play" width="64px" class="align-self-center play-overlay" />
                                </div>
                                <div class="card-body">
                                    <h5 class="card-title font-weight-bold">${video.title}</h5>
                                    <p class="card-text text-muted">${video['sub-title']}</p>
                                    <div class="creator d-flex align-items-center">
                                        <img src="${video.author_pic_url}" alt="Creator of Video" width="30px" class="rounded-circle" />
                                        <h6 class="pl-3 m-0 main-color">${video.author}</h6>
                                    </div>
                                    <div class="info pt-3 d-flex justify-content-between">
                                        <div class="rating">
                                            ${'<img src="images/star_on.png" alt="star on" width="15px" />'.repeat(video.star)}
                                            ${'<img src="images/star_off.png" alt="star off" width="15px" />'.repeat(5 - video.star)}
                                        </div>
                                        <span class="main-color">${video.duration}</span>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                });
                $("#latest-videos").html(videoHtml);
            },
            complete: function() {
                $("#loader-latest").hide();
                $("#carouselLatestVideos").show();
            },
            error: function() {
                console.log("Failed to load latest videos");
            }
        });
    }

    loadQuotes();
    loadPopularTutorials();
    loadLatestVids();
});