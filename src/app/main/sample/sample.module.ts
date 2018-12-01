import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {FuseSharedModule} from '@fuse/shared.module';

import {SampleComponent} from './sample.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {
    MatButtonModule,
    MatChipsModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatTooltipModule
} from '@angular/material';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FuseWidgetModule} from '../../../@fuse/components';
import {FormsModule} from '@angular/forms';
import {NodeDetailsComponent} from '../../components/node-details/node-details.component';
import {NeighboursTableComponent} from '../../components/neighbours-table/neighbours-table.component';
import {FilesComponent} from '../../components/files/files.component';
import {ResultsComponent} from '../../components/results/results.component';
import {LogsComponent} from '../../components/logs/logs.component';

const routes = [
    {
        path: 'dsvl',
        component: SampleComponent
    }
];

@NgModule({
    declarations: [
        SampleComponent,
        NodeDetailsComponent,
        NeighboursTableComponent,
        FilesComponent,
        ResultsComponent,
        LogsComponent
    ],
    imports: [
        RouterModule.forChild(routes),

        BrowserAnimationsModule,
        CommonModule,

        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule,
        MatTooltipModule,
        FormsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatListModule,

        FuseSharedModule,
    ],
    exports: [
        SampleComponent
    ]
})

export class SampleModule {
}
