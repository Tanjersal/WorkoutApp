import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-video-player",
  templateUrl: "./video-player.component.html",
  styles: []
})
export class VideoPlayerComponent implements OnInit, OnChanges {
  private youtubeUrl = "//www.youtube.com/embed/";

  @Input() videos: Array<string>;
  safeVideosUrls: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    this.safeVideosUrls = this.videos
      ? this.videos.map(v =>
          this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrl + v)
        )
      : this.videos;
  }

  ngOnInit() {}
}
