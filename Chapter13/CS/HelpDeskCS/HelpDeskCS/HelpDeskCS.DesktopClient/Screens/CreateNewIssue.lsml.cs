﻿// You can use and redistribute the code from this book (and sample application) for non-commercial and 
// most commercial purposes as long as you acknowledge the source and authorship. 
// You should note the source of the code in any documentation as well as in the program code itself (as a comment). 
// The acknowledgment should include author, title, publisher, and ISBN. 
// An example of such an acknowledgment would be "Derived from Listing 2-10, LightSwitch 2015 by Tim Leung, published by Apress, ISBN 978-1-4842-0767-3".


using Microsoft.LightSwitch.Presentation.Extensions;
using Microsoft.LightSwitch.Presentation;
using Microsoft.LightSwitch.Framework.Client;
using Microsoft.LightSwitch;
using System.Collections.Generic;
using System.IO.IsolatedStorage;
using System.IO;
using System.Linq;
using System;

namespace LightSwitchApplication
{
    public partial class CreateNewIssue
    {
        partial void CreateNewIssue_InitializeDataWorkspace(global::System.Collections.Generic.List<global::Microsoft.LightSwitch.IDataService> saveChangesTo)
        {
            // Write your code here.
            this.IssueProperty = new Issue();
        }

        partial void CreateNewIssue_Saved()
        {
            // Write your code here.
            this.Close(false);
            Application.Current.ShowDefaultScreen(this.IssueProperty);
        }

        partial void CreateNewIssue_Activated()
        {
            // Listing 13-2. Data-Binding a ComboBox Control 

            var comboControl = this.FindControl("Priority1");
            comboControl.SetBinding(
              System.Windows.Controls.ComboBox.ItemsSourceProperty,
                         "Screen.Priorities",
           System.Windows.Data.BindingMode.TwoWay);

            comboControl.SetBinding(
              System.Windows.Controls.ComboBox.SelectedItemProperty,
                 "Screen.IssueProperty.Priority",
                 System.Windows.Data.BindingMode.TwoWay);

        }
    }
}