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
using System.ComponentModel;

namespace LightSwitchApplication
{
    public partial class EngineerDetail
    {
        partial void Engineer_Loaded(bool succeeded)
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void Engineer_Changed()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }

        partial void EngineerDetail_Saved()
        {
            // Write your code here.
            this.SetDisplayNameFromEntity(this.Engineer);
        }




        private Engineer monitoredEngineer;

        partial void EngineerDetail_InitializeDataWorkspace(
            List<IDataService> saveChangesTo)
        {
            Microsoft.LightSwitch.Threading.Dispatchers.Main.BeginInvoke(() =>
            {
                this.Details.Properties.Engineer.Loader.ExecuteCompleted +=
                    this.EngineerLoaderExecuted;
            });
        }

        //Listing 9-17. Using PropertyChanged on a details screen 

        private void EngineerLoaderExecuted(
            object sender, Microsoft.LightSwitch.ExecuteCompletedEventArgs e)
        {

            if (monitoredEngineer != this.Engineer)
            {
                if (monitoredEngineer != null)
                {
                    (monitoredEngineer as INotifyPropertyChanged).PropertyChanged -=
                        this.EngineerChanged;
                }

                monitoredEngineer = this.Engineer;
                if (monitoredEngineer != null)
                {
                    (monitoredEngineer as INotifyPropertyChanged).PropertyChanged +=
                        this.EngineerChanged;

                    //set the initial visibility here
                    this.FindControl("SecurityGroup").IsVisible =
                        monitoredEngineer.SecurityVetted;
                }
            }
        }

        private void EngineerChanged(
            object sender, PropertyChangedEventArgs e)
        {
            if (e.PropertyName == "SecurityVetted")
            {
                this.FindControl("SecurityGroup").IsVisible =
                    monitoredEngineer.SecurityVetted;
            }
        }










    }
}