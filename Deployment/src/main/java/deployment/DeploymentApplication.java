package deployment;


import hrsystem.Auth;
import hrsystem.Fms;
import hrsystem.Hr;
import hrsystem.Pm;
import hrsystem.UI;

import io.ciera.runtime.summit.application.ApplicationExecutor;
import io.ciera.runtime.summit.application.IApplication;
import io.ciera.runtime.summit.application.ILogger;
import io.ciera.runtime.summit.application.tasks.GenericExecutionTask;
import io.ciera.runtime.summit.application.tasks.HaltExecutionTask;
import io.ciera.runtime.summit.components.IComponent;
import io.ciera.runtime.summit.exceptions.XtumlException;

import java.util.Arrays;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class DeploymentApplication extends SpringBootServletInitializer implements IApplication{

	private static DeploymentApplication singleton;
	private IComponent<?>[] components;
    private ApplicationExecutor[] executors;

    public DeploymentApplication() {
        components = new IComponent<?>[5];
        executors = new ApplicationExecutor[1];
        singleton = this;
        setup( null, null );
        initialize();
    }

    @Override
    public void run() {
        for (ApplicationExecutor executor : executors) {
            executor.run();
        }
    }

    @Override
    public void setup( String[] args, ILogger logger ) {
        for ( int i = 0; i < executors.length; i++ ) {
            if ( null != logger ) {
                executors[i] = new ApplicationExecutor( "DeploymentApplicationExecutor" + i, args, logger );
            }
            else {
                executors[i] = new ApplicationExecutor( "DeploymentApplicationExecutor" + i, args );
            }
        }
        components[4] = new Pm(this, executors[0], 4);
        components[2] = new Fms(this, executors[0], 2);
        components[0] = new Auth(this, executors[0], 0);
        components[3] = new Hr(this, executors[0], 3);
        components[1] = new UI(this, executors[0], 1);
        ((Hr)components[3]).Authenticate().satisfy(((Auth)components[0]).HR());
        ((Auth)components[0]).HR().satisfy(((Hr)components[3]).Authenticate());
        ((UI)components[1]).App().satisfy(((Hr)components[3]).UI());
        ((Hr)components[3]).UI().satisfy(((UI)components[1]).App());
        ((UI)components[1]).AppOps().satisfy(((Hr)components[3]).UI_Ops());
        ((Hr)components[3]).UI_Ops().satisfy(((UI)components[1]).AppOps());
        ((UI)components[1]).Authenticate().satisfy(((Auth)components[0]).UI());
        ((Auth)components[0]).UI().satisfy(((UI)components[1]).Authenticate());
        ((UI)components[1]).Finance().satisfy(((Fms)components[2]).UI());
        ((Fms)components[2]).UI().satisfy(((UI)components[1]).Finance());
        ((UI)components[1]).Projects().satisfy(((Pm)components[4]).UI());
        ((Pm)components[4]).UI().satisfy(((UI)components[1]).Projects());
    }

    public Pm Pm() {
        return (Pm)components[4];
    }
    public Fms Fms() {
        return (Fms)components[2];
    }
    public Auth Auth() {
        return (Auth)components[0];
    }
    public Hr Hr() {
        return (Hr)components[3];
    }
    public UI UI() {
        return (UI)components[1];
    }

    @Override
    public void initialize() {
        for ( IComponent<?> component : components ) {
            component.getRunContext().execute( new GenericExecutionTask() {
                @Override
                public void run() throws XtumlException {
                    component.initialize();
                }
            });
        }
    }

    @Override
    public void start() {
        if (1 == executors.length) {
            executors[0].run();
        }
        else {
            for ( ApplicationExecutor executor : executors ) {
                executor.start();
            }
        }
    }

    @Override
    public void printVersions() {
        io.ciera.runtime.Version.printVersion();
        for ( IComponent<?> c : components ) {
            System.out.printf("%s: %s (%s)", c.getClass().getName(), c.getVersion(), c.getVersionDate());
            System.out.println();
        }
    }

    @Override
    public void stop() {
        for ( ApplicationExecutor executor : executors ) {
            executor.execute(new HaltExecutionTask());
        }
    }

    public static void main( String[] args ) {
    	SpringApplication.run( DeploymentApplication.class, args );
        singleton.start();
    }
    
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(applicationClass);
    }

    private static Class<DeploymentApplication> applicationClass = DeploymentApplication.class;

}
