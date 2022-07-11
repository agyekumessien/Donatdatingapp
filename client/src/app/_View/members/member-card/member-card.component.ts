import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Member } from 'src/app/_Models/MemberModel/member';
import { MembersService } from 'src/app/_Services/Members/members.service';



@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.css'],
})
export class MemberCardComponent implements OnInit {
  @Input() member: Member;

  constructor(private memberService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addLike(member: Member) {
    this.memberService.addLike(member.username).subscribe(() => {
      this.toastr.success('You have liked ' + member.knownAs);
    })
  }

}