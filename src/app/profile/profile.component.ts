import { Component, OnInit } from '@angular/core';
import { GitService } from '../git.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile:any[];
  repos:any[];

  constructor(public profileService: GitService) {
    this.profileService.getProfileInfo().subscribe(profile => {
      console.log(profile)
      this.profileService = profile;
    });

    this.profileService.getProfileRepos().subscribe(repos => {
      console.log(repos);
      this.repos = repos;
    })
   }

  ngOnInit() {
  }

}
