import {
  Component, Input, TemplateRef, ContentChildren, QueryList, ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'sky-contrib-list-view-repeater-description',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkyContribListViewRepeaterDescriptionComponent {
  private inputTemplate: TemplateRef<any>;
  @ContentChildren(TemplateRef) private templates: QueryList<TemplateRef<any>>;
  @Input() public set template(value) { this.inputTemplate = value; }
  public get template() {
    return this.templates.length > 0 ? this.templates.first : this.inputTemplate;
  }
}
