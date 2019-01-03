import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

let index = null;

@Component({
  selector: 'app-resultat-view',
  templateUrl: './resultat-view.component.html',
  styleUrls: ['./resultat-view.component.css']
})
export class ResultatViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	  index = this.route.snapshot.params['id'];
	  console.log(index);
  }

}
